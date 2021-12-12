import { forwardRef, ForwardedRef } from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import dayjs from 'dayjs';

import { useStyles } from './useStyles';
import { useHomePageContext } from '../../../../../../contexts/HomePageContext';
import { AvailableTimeSlotDto } from '../../../../../../interfaces/availableTimeSlot';
import { ROUTES } from '../../../../../../routes';

function AvailableTime(_props: any, ref: ForwardedRef<HTMLDivElement>) {
  const history = useHistory();
  const classes = useStyles();
  const { selectedDate, setSelectedTimeSlot } = useHomePageContext();

  function handleClickTimeSlot(availableTimeSlot: AvailableTimeSlotDto) {
    setSelectedTimeSlot(availableTimeSlot);
    history.push(ROUTES.customerInfoForm);
  }

  if (!selectedDate?.availableTimeSlots?.length) return null;

  return (
    <Paper className={classes.root}>
      <div className={classes.anchor} ref={ref} />
      <Paper className={classes.timeSlotHeader} elevation={2} square>
        <p>When would you like to vist us on {dayjs(selectedDate.date).format('DD/MM/YYYY')} ?</p>
      </Paper>
      {selectedDate.availableTimeSlots.map((availableTimeSlot, i) => (
        <Paper
          key={i}
          className={classes.timeSlot}
          onClick={() => handleClickTimeSlot(availableTimeSlot)}
          elevation={2}
          square
        >
          <div>{availableTimeSlot.startTime}</div>
          <div>{'>'}</div>
        </Paper>
      ))}
    </Paper>
  );
}

const AvailableTimeWithForwardedRef = forwardRef(AvailableTime);

export { AvailableTimeWithForwardedRef as AvailableTime };
