import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';

import { useHomePageContext } from '../../../../../../contexts/HomePageContext';
import { getMapDateToAvailableDate, getMapDateToMaxAvailableDate } from '../../../../../../services/availableDate';
import { MapDateToAvailableDate } from '../../../../../../interfaces/availableDate';
import { useStyles } from './useStyles';
import { NO_PREFERENCE_STAFF_ID } from '../../../../../../staticData/staff';
import { StaffDto } from '../../../../../../interfaces/staff';
import { TimeTableCell } from './TimeTableCell';
import { useRegularStaffQuery } from '../../../../../../queries/staff';

export function Calendar() {
  const classes = useStyles();
  const { selectedStaff, selectedServices } = useHomePageContext();
  const regularStaffQuery = useRegularStaffQuery(selectedServices);
  let mapDateToAvailableDate: MapDateToAvailableDate;

  if (selectedStaff.id === NO_PREFERENCE_STAFF_ID) {
    mapDateToAvailableDate = getMapDateToMaxAvailableDate(selectedServices, regularStaffQuery.data || []);
  } else {
    mapDateToAvailableDate = getMapDateToAvailableDate(selectedStaff as StaffDto, selectedServices);
  }

  function TableComponent(props: any) {
    return <MonthView.TimeTableLayout {...props} className={classes.timeTableLayout} />;
  }

  function DayScaleLayoutComponent(props: any) {
    return <MonthView.DayScaleLayout {...props} className={classes.dayScaleLayout} />;
  }

  return (
    <MonthView
      timeTableLayoutComponent={TableComponent}
      dayScaleLayoutComponent={DayScaleLayoutComponent}
      timeTableCellComponent={(props) => <TimeTableCell {...props} mapDateToAvailableDate={mapDateToAvailableDate} />}
    />
  );
}
