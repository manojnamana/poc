
import { DummyData } from '@/utiles/noti';
import { LocationOn } from '@mui/icons-material';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Notifications = () => {

    const DeadLineDate = (text:string|null)=>{
        let datex = text?.includes('T') && text?.split('T')
        if(!datex){
          return text
        }else{
          return datex[0]
        }
          
       }

  return (
    <Stack gap={2} bgcolor={'#f5f5f5'} p={3} borderRadius={2}  margin={4} width={"80%"}  >

{DummyData?.flatMap((item) =>
   item.opportunitiesData.length === 0 ? 
   [<Typography key="no-data" variant="h6" fontWeight="bold" textAlign="center" mt={2}>No Data Found</Typography>] :
   item.opportunitiesData.map((item, index) => (
     <Paper key={item.solicitationNumber || index} elevation={3} sx={{ padding: 2, ":hover": { backgroundColor: "whitesmoke" } }}>
       <Stack component="button" width="100%" bgcolor="transparent" border={0}>
         <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
           <Typography fontSize={15}>Solicitation Number: {item?.solicitationNumber}</Typography>
           {item?.placeOfPerformance?.country?.name && (
             <>
               <Typography fontSize={20} pb={0.3}>|</Typography>
               <Typography fontSize={15} display="flex" alignItems="center">
                 <LocationOn fontSize="small" /> {item?.placeOfPerformance?.country?.code}
               </Typography>
             </>
           )}
         </Box>

         <Typography textAlign="start" fontSize={15} py={1}>
           Title - {item?.title}
         </Typography>

         <Box display="flex" alignItems="center" gap={2}>
           <Typography fontSize={15}>Type: {item?.type}</Typography>
           <Typography fontSize={15}>Posted: {item?.postedDate}</Typography>
           {item?.responseDeadLine && (
             <Typography fontSize={15}>
               Deadline: {DeadLineDate(item?.responseDeadLine)}
             </Typography>
           )}
           <Chip 
             label={item?.active === "Yes" ? "Active" : "Inactive"} 
             sx={{ bgcolor: item?.active === "Yes" ? '#57e45ca6' : '#e45757a6', color: 'whitesmoke' }} 
             size="small" 
           />
         </Box>
       </Stack>
     </Paper>
   ))
)}


    </Stack>
  )
}

export default Notifications