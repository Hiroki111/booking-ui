import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';

import { useHomePageContext } from '../../../../../../contexts/HomePageContext';
import { getAvailableDateMap, getAvailableDateMapWithMaxAvailability } from '../../../../../../services/availableDate';
import { AvailableDateMap } from '../../../../../../interfaces/availableDate';
import { useStyles } from './useStyles';
import { NO_PREFERENCE_STAFF } from '../../../../../../staticData/staff';
import { StaffDto } from '../../../../../../interfaces/staff';
import { TimeTableCell } from './TimeTableCell';
import { useAvailableStaffQuery } from '../../../../../../quries/staff';

export function Calendar() {
  const classes = useStyles();
  const { selectedStaff, selectedServices } = useHomePageContext();
  const availableStaffQuery = useAvailableStaffQuery(selectedServices);
  let availableDateMap: AvailableDateMap;

  if (selectedStaff.id === NO_PREFERENCE_STAFF.id) {
    availableDateMap = getAvailableDateMapWithMaxAvailability(selectedServices, availableStaffQuery.data || []);
  } else {
    availableDateMap = getAvailableDateMap(selectedStaff as StaffDto, selectedServices);
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
      timeTableCellComponent={(props) => (
        <TimeTableCell {...props} selectedStaff={selectedStaff} availableDateMap={availableDateMap} />
      )}
    />
  );
}
