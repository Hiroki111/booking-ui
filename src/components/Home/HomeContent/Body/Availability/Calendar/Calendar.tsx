import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import dayjs from 'dayjs';
import clsx from 'clsx';

import { useHomePageContext } from '../../../../../../contexts/HomePageContext';
import { getAvailableDateMap } from '../../../../../../services/availableDate';
import { AvailableDateMap } from '../../../../../../interfaces/availableDate';
import { useStyles } from './useStyles';

export function Calendar() {
  const classes = useStyles();
  const { selectedStaff, selectedDate, setSelectedDate, selectedServices } = useHomePageContext();
  const availableDateMap: AvailableDateMap = getAvailableDateMap(selectedStaff, selectedServices);

  function TableComponent(props: any) {
    return <MonthView.TimeTableLayout {...props} className={classes.timeTableLayout} />;
  }

  function DayScaleLayoutComponent(props: any) {
    return <MonthView.DayScaleLayout {...props} className={classes.dayScaleLayout} />;
  }

  function TimeTableCellComponent(props: any) {
    const dateString = dayjs(props.startDate).format('YYYY-MM-DD');
    const availableDateObj = availableDateMap[dateString];

    return (
      <MonthView.TimeTableCell
        {...{ ...props, today: false }}
        className={clsx(
          classes.dayCell,
          availableDateObj?.date ? classes.availableDay : classes.unavailableDay,
          dateString === selectedDate?.date ? classes.selectedDay : '',
        )}
        onClick={() => {
          if (!availableDateObj) return;

          setSelectedDate(availableDateObj);
        }}
      />
    );
  }

  return (
    <MonthView
      timeTableLayoutComponent={TableComponent}
      dayScaleLayoutComponent={DayScaleLayoutComponent}
      timeTableCellComponent={TimeTableCellComponent}
    />
  );
}
