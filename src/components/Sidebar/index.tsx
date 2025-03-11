/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,

  useMediaQuery,
  Badge,
} from '@mui/material';
import {
 
  ChevronRight,
 
} from 'lucide-react';
import { AccountCircle, AttachMoney, Circle, Logout, Notifications, People, Work } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8257dc',
    },
    secondary: {
      main: '#f97316',
    },
    background: {
      default: '#dee0e0',
      paper: '#ececec',
    },
    text:{
      primary: '#0a0a0a',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

// const GradientText = styled(Typography)(({ theme }) => ({
//   background: 'linear-gradient(45deg, #ec4899, #f97316, #3b82f6)',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   backgroundClip: 'text',
// }));



const CollapsibleLibrary = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [count,setCount] = useState(2)

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const route = useRouter()
  const [activeComponent, setActiveComponent] = useState(`${route.pathname}`); 

  const drawerWidth = isSidebarOpen ? 241 : 241;
  const getactive = (route.pathname)
  console.log(getactive)

  useEffect (()=>{
    const renderActiveComponent = () => {

       if(getactive === '/profile/?opputunity='){
        setActiveComponent('/profile/')
    }
    else if(getactive === '/records/'){
      setActiveComponent('/oppurtunities/')
  }


    }

    renderActiveComponent()
    
  },[getactive])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 60000); // 10 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);



  const NavMenuItem = ({ icon: Icon, label, isActive = false, onClick, hasSubitems = false }) => {
    const theme = useTheme();
  
    return (
      <ListItemButton
        onClick={onClick}
        sx={{
          borderRadius: 2,
          mb: 1,
          color: isActive ? 'primary.main' : 'text.secondary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
          {label === "Notifications" ? (
            <Badge badgeContent={count} color="error">
              <Icon fontSize="medium" />
            </Badge>
          ) : (
            <Icon fontSize="medium" />
          )}
        </ListItemIcon>
        <ListItemText primary={label} />
        {hasSubitems && (
          <ChevronRight
            fontSize="small"
            style={{
              transform: isActive ? 'rotate(90deg)' : 'none',
              transition: theme.transitions.create('transform'),
            }}
          />
        )}
      </ListItemButton>
    );
  };



  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100%' ,bgcolor:"#efe8fd"}}>
      <Drawer
    variant="permanent"
   sx={{
    width: {lg:drawerWidth,xs:75},
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: {lg:drawerWidth,xs:75},
      boxSizing: 'border-box',
      transition: (theme) =>
        theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      display: 'flex',
      flexDirection: 'column', // Ensures the content stacks vertically
      justifyContent: 'space-between', // Pushes content to top and bottom
      bgcolor:'#11062c'

    },
  }}
>
  <Box>
  <Typography  color='white' variant="h6" sx={{ p: 2 }}  fontWeight={"bold"} fontFamily={'initial'} ml={4}
  >
  TACSCAN
  </Typography>
<Divider />
    <List sx={{ px: 2 }}>


      <NavMenuItem
         icon={Work}
        label={isSmallScreen ? 'Oppurtunities' : ''}
        isActive={activeComponent === '/oppurtunities'}
        onClick={() => {setActiveComponent('/oppurtunities'),route.push('/oppurtunities')}}
      />
      <NavMenuItem
         icon={AttachMoney}
        label={isSmallScreen ? 'USA Spendings' : ''}
        isActive={activeComponent === '/usaspendings'}
        onClick={() => {setActiveComponent('/usaspendings'),route.push('/usaspendings?agency=012')}}
      />
      <NavMenuItem
         icon={Notifications}
        label={isSmallScreen ? 'Notifications' : ''}
        isActive={activeComponent === '/notifications'}
        onClick={() => {setActiveComponent('/notifications'),route.push('/notifications')}}
      />
      
      {/* <NavMenuItem
        icon={BriefcaseBusiness}
        label={isSmallScreen ? 'Jobs Listing' : ''}
        isActive={activeComponent === '/jobs'}
        onClick={() => {setActiveComponent('/jobs'),route.push('/jobs')}

        }
      />

       <NavMenuItem
        icon={Handshake}
        label={isSmallScreen ? 'Take Interview' : ''}
        isActive={activeComponent === '/takeinterview'}
        onClick={() => {setActiveComponent('/takeinterview'),route.push('/takeinterview')}

        }
      />
             <NavMenuItem
        icon={File}
        label={isSmallScreen ? 'View Assessment Report' : ''}
        isActive={activeComponent === '/viewassessmentreport'}
        onClick={() => {setActiveComponent('/viewassessmentreport'),route.push('/viewassessmentreport')}

        }
      /> */}
    </List>
  </Box>

  {/* Profile and Settings Section */}
  <Box>
    <Divider />
    <List sx={{ px: 2 }}>
      <NavMenuItem
        icon={AccountCircle}
        label={isSmallScreen ? 'Profile' : ''}
        isActive={activeComponent === '/profile'}
        onClick={()=>{setActiveComponent('/profile'),route.push('/profile')}}
      />
      <NavMenuItem
        icon={Logout}
        label={isSmallScreen ? 'Logout' : ''}
        onClick={()=>{setActiveComponent('/'),Cookies.remove('access_token'),route.push('/')}}
      />
    </List>
  </Box>
      </Drawer>

      </Box>
    </ThemeProvider>
  );
};

export default CollapsibleLibrary;