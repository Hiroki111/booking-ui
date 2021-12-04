import { Paper, Typography } from '@material-ui/core';

import { StaffPanel } from './StaffPanel';
import { useHomePageContext } from '../../../../../contexts/HomePageContext';
import { useAvailableStaffQuery } from '../../../../../quries/staff';
import { getStaffListWithNoPreferenceStaff } from '../../../../../services/staff';
import { useStyles } from './useStyles';

export function Staff() {
  const classes = useStyles();
  const { selectedServices } = useHomePageContext();
  const availableStaffQuery = useAvailableStaffQuery(selectedServices);
  const staffList = getStaffListWithNoPreferenceStaff(availableStaffQuery.data || []);

  function displayStaffList() {
    if (!staffList.length) {
      return (
        <Typography component="p" className={classes.noStaffAvailable}>
          No staff available for the selected services. <a href="/">Click here</a> and uncheck a selected service.
        </Typography>
      );
    }

    return staffList.map((staff, i) => <StaffPanel staff={staff} key={i} />);
  }

  return (
    <Paper className={classes.root} elevation={2}>
      {displayStaffList()}
    </Paper>
  );
}
