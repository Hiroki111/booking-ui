import { MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import clsx from 'clsx';
import dayjs from 'dayjs';

import { useHomePageContext } from '../../../../../../../contexts/HomePageContext';
import { AvailableDateMap } from '../../../../../../../interfaces/availableDate';
import { NoPreferenceStaff, StaffDto } from '../../../../../../../interfaces/staff';
import { useStyles } from './useStyles';

interface Props {
  selectedStaff: StaffDto | NoPreferenceStaff;
  availableDateMap: AvailableDateMap;
}

export function TimeTableCell({ selectedStaff, availableDateMap, ...monthViewProps }: Props & any) {
  const classes = useStyles();
  const { selectedDate, setSelectedDate } = useHomePageContext();
  const dateString = dayjs(monthViewProps.startDate).format('YYYY-MM-DD');
  const availableDateObj = availableDateMap[dateString];

  return (
    <MonthView.TimeTableCell
      {...{ ...monthViewProps, today: false }}
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
