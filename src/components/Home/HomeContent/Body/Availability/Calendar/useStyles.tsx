import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import { hoverableOption } from '../../../../../../styles/sharedStyles';

export const useStyles = makeStyles((theme) => ({
  timeTableLayout: {
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '320px',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '500px',
    },
  },
  dayScaleLayout: {
    borderRadius: '8px',
    // @media (max-width: 959.95px)
    [theme.breakpoints.down('sm')]: {
      minWidth: '320px',
    },
    // @media (min-width: 960px)
    [theme.breakpoints.up('md')]: {
      minWidth: '500px',
    },
  },
  dayCell: {
    height: 70,
    position: 'relative',
    '& div': {
      fontSize: '1rem',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)',
    },
  },
  availableDay: hoverableOption(theme),
  unavailableDay: {
    backgroundColor: '#F2F2F7',
    height: 70,
  },
  selectedDay: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
}));
