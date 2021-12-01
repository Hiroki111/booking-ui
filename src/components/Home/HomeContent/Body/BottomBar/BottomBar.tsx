import { useHistory, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Chip from '@material-ui/core/Chip';
import Slide from '@material-ui/core/Slide';

import { useHomePageContext } from '../../../../../contexts/HomePageContext';
import { useAvailableStaffQuery } from '../../../../../quries/staff';
import { ROUTES } from '../../../../../routes';
import { useStyles } from './useStyles';
import { MAX_SERVICE_SELECTION_NUMBER } from '../../../../../staticData/service';

export function BottomBar() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const { selectedServices } = useHomePageContext();
  const availableStaffQuery = useAvailableStaffQuery(selectedServices);
  const availableStaffList = availableStaffQuery.data || [];

  function handleOnClickBooking() {
    history.push(ROUTES.staff);
  }

  if (ROUTES.service !== location.pathname) {
    return null;
  }

  return (
    <Slide direction="up" in={selectedServices.length > 0}>
      <BottomNavigation className={classes.bottomNavigation}>
        <BottomNavigationAction
          icon={
            <Chip
              label="Book now"
              color="primary"
              className={classes.bookigButton}
              onClick={handleOnClickBooking}
              disabled={availableStaffList.length < 1 || MAX_SERVICE_SELECTION_NUMBER < selectedServices.length}
            />
          }
        />
      </BottomNavigation>
    </Slide>
  );
}