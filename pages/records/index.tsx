//@ts-nocheck


import { OpportunitiesData } from '@/types/datatype'
import { Data } from '@/utiles/data'
import { Close, LocationOn, SearchOutlined } from '@mui/icons-material'
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, Skeleton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'

 const Contracts = () => {
  const [loading, setLoading] = useState(false)
  const [viewDetail, setViewDetail] = useState<OpportunitiesData|null>(null)
  const [modal, setModal] = useState(false)
  const theme = useTheme()

  
 const DeadLineDate = (text:string|null)=>{
  let datex = text?.includes('T') && text?.split('T')
  if(!datex){
    return text
  }else{
    return datex[0]
  }
    
 }
//  const WrappedText = ({ text }: { text: string }) => {
//   const words = text.split(" ");
//   const firstLine = words.slice(0, 10).join(" ");
//   const secondLine = words.slice(10).join(" ");

//   return (
//     <Typography variant="body1">
//     <span>Title - {firstLine}</span>
//     {secondLine && <><br /><span>{secondLine}</span></>}
//   </Typography>
//   );
// };
const fullScreen = useMediaQuery(theme?.breakpoints.down('lg'));



const handleClose = () => {
  setModal(false);
};

  return (
    <Stack width={"100%"}>
            
    <Stack gap={2} bgcolor={'#f5f5f5'} p={3} borderRadius={2}  margin={4}>
   {!loading && <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
    <Stack direction='row' spacing={2} width={"50%"} sx={{alignItems:'center',
        backgroundColor:'#f5f5f5',paddingRight:2,border:'2px solid #e0e0e0',borderRadius: '10px'}}> 
      <input type="text" placeholder="Search..." 
      style={{width: "100%",height:60,padding:10,border:'none',outline:'none',borderTopLeftRadius:10,borderBottomLeftRadius:10,
      
      fontSize:18,paddingLeft:20}}/>
      <IconButton sx={{":hover":{backgroundColor:'#f5f5f5'}}}>
      <SearchOutlined sx={{ color: 'text.secondary',fontSize:30}} />
      </IconButton>
        
       
        </Stack>

   </Box>
}
      {loading && (
        <Stack gap={2}>
          <Skeleton animation="wave" sx={{bgcolor:"lightgray"}} variant="rectangular" height={100}   width={"100%"} />
          <Skeleton animation="wave" sx={{bgcolor:"lightgray"}} variant="rectangular" height={100}  width={"100%"} />
          <Skeleton animation="wave" sx={{bgcolor:"lightgray"}} variant="rectangular" height={100}  width={"100%"} />
          <Skeleton animation="wave" sx={{bgcolor:"lightgray"}} variant="rectangular" height={100}  width={"100%"} />
          <Skeleton animation="wave" sx={{bgcolor:"lightgray"}} variant="rectangular" height={100}  width={"100%"} />
        </Stack>

        
      )}
      {!loading &&
      
       Data.map((item) =>
      item.opportunitiesData.length > 0 ? 
      item.opportunitiesData?.map((item, index) =>(
        <Paper elevation={3}  key={index} sx={{padding: 2,":hover":{backgroundColor:"whitesmoke"}}} >
            <Stack component={"button"} width={"100%"} onClick={()=>{
              setViewDetail({
                title: item?.title ?? '',
                solicitationNumber: item?.solicitationNumber ?? '',
                noticeId: item?.noticeId ?? '',
                fullParentPathName: item?.fullParentPathName ?? '',
                fullParentPathCode: item?.fullParentPathCode ?? '',
                postedDate: item?.postedDate ?? '',
                type: item?.type ?? '',
                baseType: item?.baseType ?? '',
                archiveType: item?.archiveType ?? '',
                archiveDate: item?.archiveDate ?? '',
                typeOfSetAsideDescription: item?.typeOfSetAsideDescription ?? null,
                typeOfSetAside: item?.typeOfSetAside ?? null,
                responseDeadLine: item?.responseDeadLine ?? '',
                naicsCode: item?.naicsCode ?? '',
                naicsCodes: item?.naicsCodes ?? [],
                classificationCode: item?.classificationCode ?? '',
                active: item?.active ?? '',
                award: item?.award ?? null,
                pointOfContact: item?.pointOfContact ?? [],
                description: item?.description ?? '',
                organizationType: item?.organizationType ?? '',
                officeAddress: item?.officeAddress ?? {
                  zipcode: '',
                  city: '',
                  countryCode: '',
                  state: '',
                },
                placeOfPerformance: item?.placeOfPerformance ?? null,
                additionalInfoLink: item?.additionalInfoLink ?? null,
                uiLink: item?.uiLink ?? '',
                links: item?.links ?? [],
                resourceLinks: item?.resourceLinks ?? null,
              })
              ;setModal(true)}} bgcolor={"transparent"} border={0}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2}>
              <Typography fontSize={15}>
              Solicitation Number : {item?.solicitationNumber}
              </Typography>
              {item?.placeOfPerformance?.country?.name && (
                <>
              <Typography fontSize={20} pb={0.3}>
                |
              </Typography>

              <Typography fontSize={15} display={"flex"} alignItems={"center"}>
              <LocationOn fontSize='small' /> {item?.placeOfPerformance?.country?.code}
              </Typography>
              </>)}
            </Box>

              <Typography textAlign={"start"} fontSize={15} py={1}>
                {/* <WrappedText text= {item?.title} /> */}
                Title - {item?.title}
              </Typography>


              <Box display={"flex"} alignItems={"center"} gap={2}>
              <Typography fontSize={15}>
                Type : {item?.type} 
              </Typography>
              
              <Typography fontSize={15} >
                Posted : {item?.postedDate} 
              </Typography>
              <Typography fontSize={15}>
                Deadline : {DeadLineDate(item?.responseDeadLine)} 
                {/* Deadline : {item?.responseDeadLine} */}
              </Typography>
              
               {item?.active==="Yes" ? (<Chip label={item?.active==="Yes"?"Active":"In active"} sx={{bgcolor:'#57e45ca6',color:'whitesmoke'}} size='small' />)
               :
               ( <Chip label={item?.active==="Yes"?"Active":"In active"} sx={{bgcolor:'#e45757a6',color:'whitesmoke'}} size='small' />)}

             

              </Box>

            </Stack>
        </Paper> ) 
      ): <Typography textAlign={"center"} fontWeight={"Bold"}>No Data Found</Typography>
      )}
    </Stack>

    <Dialog
        fullScreen={fullScreen}
        open={modal}
        fullWidth
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
              <Typography variant="h6"> Detail View</Typography>
              <IconButton onClick={handleClose}>
                <Close />  </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Stack gap={2} p={2}>
           <Paper elevation={3} >
            <Typography variant="h6" bgcolor={"skyblue"} color='white' p={2}>OverView</Typography>

            <Stack gap={2} p={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Title</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{viewDetail?.title}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Response Deadline</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{DeadLineDate(viewDetail?.responseDeadLine)}</Typography>
                  {/* <Typography variant="h6">{viewDetail?.responseDeadLine}</Typography> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Response Posted</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{viewDetail?.postedDate}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Set Aside</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{viewDetail?.typeOfSetAsideDescription ? viewDetail?.typeOfSetAsideDescription : "Not Provided"}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Place of Performance</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  {viewDetail?.placeOfPerformance?.country?.name ?
                  <Typography variant="h6">{viewDetail?.placeOfPerformance?.country?.name}</Typography>
                : <Typography variant="h6">Not Provided</Typography>}
              </Grid>
              </Grid>
            </Stack>
           </Paper>
           <Paper elevation={3} >
            <Typography variant="h6" bgcolor={"skyblue"} color='white' p={2}>Primary Contact</Typography>

            <Stack gap={2} p={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Name</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{viewDetail?.pointOfContact[0]?.fullName}</Typography>
              </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Email</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{viewDetail?.pointOfContact[0]?.email}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Phone</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{viewDetail?.pointOfContact[0]?.phone}</Typography>
              </Grid>
              </Grid>
            </Stack>
           </Paper>
           </Stack>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>

    </Stack>
  )
}


export default Contracts