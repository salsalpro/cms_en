// import Dashbord from "../pages/Dashbord/Dashbord"
// import Table from "../pages/Table/Table"
// import Biling from "../pages/Biling/Biling";
// import Profile from "../pages/profile/profile";
// import P404 from "../pages/p404/p404";



// import VirtualReality from "../pages/virtualReality/virtualReality";
// import SignIn from "../pages/SignIn/SignIn";
// import SignUp from "../pages/SignUp/SignUp";

//icon
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';

// import BentoIcon from '@mui/icons-material/Bento';
// import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
// import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';

import React from 'react';

const Dashbord = React.lazy(() => import("../pages/Dashbord/Dashbord"));
const Table = React.lazy(() => import("../pages/Table/Table"));
const Biling = React.lazy(() => import("../pages/Biling/Biling"));
const Profile = React.lazy(() => import("../pages/profile/profile"));
const P404 = React.lazy(() => import("../pages/p404/p404"));



let AllRoute = [
    // { path: '/', element: <Dashbord />, name: 'Dashbord', icon: <WindowRoundedIcon /> },
    {
        path: '/', element:
            <Suspense fallback={<div>در حال بارگذاری...</div>}>
                <Dashbord />
            </Suspense>
        , name: 'Dashbord', icon: <WindowRoundedIcon />
    },
    // { path: '/Table', element: <Table />, name: 'Table', icon: <SafetyDividerIcon /> },

    {
        path: '/Table', element:
            <Suspense fallback={<div>در حال بارگذاری...</div>}>
                <Table />
            </Suspense>
        , name: 'Table', icon: <SafetyDividerIcon />
    },

    // { path: '/biling', element: <Biling />, name: 'biling', icon: <CreditCardIcon /> },
    {
        path: '/biling', element:
            <Suspense fallback={<div>در حال بارگذاری...</div>}>
                <Biling />
            </Suspense>
        , name: 'biling', icon: <CreditCardIcon />
    },

    { path: '/profile', element: <Profile />, name: 'profile', icon: <Person2TwoToneIcon /> },
    { path: '/profile', element: 
          <Suspense fallback={<div>در حال بارگذاری...</div>}>
        <Profile />
      </Suspense>
      , name: 'profile', icon: <Person2TwoToneIcon /> },

    // { path: '/*', element: <P404 /> },
     { path: '/*', element: 
          <Suspense fallback={<div>در حال بارگذاری...</div>}>
   <Suspense fallback={<div>در حال بارگذاری...</div>}>
        <BigComponent />
      </Suspense>ّ
      </Suspense>
     },
    // { path: '/virtual-reality', element: <VirtualReality />, name: 'virtual-reality', icon: <BentoIcon /> },
    // { path: '/signin', element: <SignIn />, name: 'sign In', icon: <DocumentScannerTwoToneIcon /> },
    // { path: '/signup', element: <SignUp />, name: 'sign Up', icon: <RocketLaunchTwoToneIcon /> },

]


export default AllRoute

