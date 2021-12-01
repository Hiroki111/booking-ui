import { useEffect, createRef } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Toolbar } from '@devexpress/dx-react-scheduler-material-ui';

import { useHomePageContext } from '../../../../../contexts/HomePageContext';
import { AvailableTime } from './AvailableTime';
import { getPathToSkippedPage } from '../../../../../services/routing';
import { Calendar } from './Calendar';
import { NavigationBar } from './NavigationBar';
import { useStyles } from './useStyles';

export function Availability() {
  const classes = useStyles();
  const refToAvailableTime: React.RefObject<HTMLDivElement> = createRef();
  const { selectedDate, bookingCompletionState } = useHomePageContext();
  const location = useLocation();
  const pathToSkippedPage = getPathToSkippedPage(location.pathname, bookingCompletionState);

  useEffect(() => {
    if (selectedDate && refToAvailableTime.current) {
      refToAvailableTime.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedDate, refToAvailableTime]);

  function ToolBarRootComponent(props: any) {
    return <Toolbar.Root {...props} className={classes.toolbarRoot} />;
  }

  if (pathToSkippedPage) {
    return <Redirect to={pathToSkippedPage} />;
  }

  return (
    <>
      <Paper elevation={2} className={classes.schedulerContainer}>
        <Scheduler>
          <ViewState />
          <Toolbar rootComponent={ToolBarRootComponent} />
          <NavigationBar />
          <Calendar />
        </Scheduler>
      </Paper>
      {selectedDate?.date && <AvailableTime ref={refToAvailableTime} />}
    </>
  );
}
