// @ts-nocheck
import { SearchOutlined } from '@mui/icons-material'
import { Alert, Box, Grid, IconButton, Link, Paper, Skeleton, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AgencyByCode } from '../api/samgov'
import { Agency } from '@/types/agencyOveryView'

 const UsaSpendings = () => {
    const router = useRouter()
    const quer = router.query?.agency
    const [loading,setLoading]= useState(false)
    const [refresh,setRefresh] = useState(false)
    const [data,setData]= useState<Agency[]>([])
    const [query2,setQuery2] = useState("")
    const [errorMessage,setErrorMessage]= useState('')
    const [open,setOpen]= useState(false)


    useEffect(()=>{

      if(!quer){
        return 
      } 
      setLoading(true)
      const fetchAgencyOverView = async()=>{
        try{
            const res = await AgencyByCode(quer)
            // console.log(res?.data)
            if (res.status === 200){
              setData([res?.data])
            setLoading(false)
            }
            
        }catch(error: any){
          console.log(`error : ${error?.response?.data?.detail}`)
         setErrorMessage(error?.response?.data?.detail)
         setOpen(true)
         setData([])
        }finally{
          setLoading(false)
        }

      }
      fetchAgencyOverView()

    },[refresh,quer])
    const handleClose = (event:any,reason:any) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false)
    };


  return (

    <Stack gap={2} bgcolor={'#f5f5f5'} p={3} borderRadius={2}  margin={4} width={"80%"}  >
      {!loading && <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
    <Stack direction='row' spacing={2} width={"50%"} sx={{alignItems:'center',
        backgroundColor:'#f5f5f5',paddingRight:2,border:'2px solid #e0e0e0',borderRadius: '10px'}}> 
      <input type="text" placeholder="Search By Toptier code..."  value={query2} onChange={(e)=>(setQuery2(e.target.value))}
      style={{width: "100%",height:60,padding:10,border:'none',outline:'none',borderTopLeftRadius:10,borderBottomLeftRadius:10,
      fontSize:18,paddingLeft:20}}/>
      <IconButton sx={{":hover":{backgroundColor:'#f5f5f5'}}} disabled={!query2} onClick={()=>(router.push(`usaspendings/?agency=${query2}`),setRefresh(!refresh))}>
      <SearchOutlined sx={{ color: 'text.secondary',fontSize:30}} />
      </IconButton>
        </Stack>

   </Box>
}
  {loading && (
    <Stack gap={2}>
      <Skeleton variant='text' width={350} height={40} animation="wave" sx={{bgcolor:"lightgray"}}/>
      
      <Skeleton variant='rectangular' width="100%" height={240} animation="wave" sx={{bgcolor:"lightgray"}}/>

       <Skeleton variant='rectangular' width="100%" height={240} animation="wave" sx={{bgcolor:"lightgray"}}/>
       </Stack>
  )
  }
      
            {!loading && data.length <1 && (<Typography variant="h6" fontWeight={"bold"} textAlign={"center"} mt={2}>No Data Found</Typography>)}
      
      
        {!loading && 
        data?.map((item)=>(
          <Stack gap={2} >
        <Typography variant='h4' fontWeight={"bold"}>
          {item?.name}
        </Typography>
        <Paper elevation={3} sx={{mt:2}} >
            <Typography variant="h6" bgcolor={"skyblue"} color='white' p={2}>Overview</Typography>

            <Stack gap={2} p={2}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Agency</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography variant='h6'>{item?.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Toptier code</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography variant='h6'>{item?.toptier_code}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Abbreviation</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography variant='h6'>{item?.abbreviation}</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Congressional justification url</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Link href={item?.congressional_justification_url}>{item?.congressional_justification_url}</Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Mission</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography variant='h6'>{item?.mission}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Website</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Link href={item?.website} underline='none'>{item?.abbreviation}</Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Subtier agency count</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <Typography variant='h6'>{item?.subtier_agency_count}</Typography>
              </Grid>
              </Grid>
            </Stack>
           </Paper>

          <TableContainer  component={Paper} sx={{backgroundColor:"white",maxHeight:400,overflowX:"hidden",'&::-webkit-scrollbar': { display: 'none' }, '-ms-overflow-style': 'none'}}>
           <Table   >
  <TableHead sx={{ bgcolor: "skyblue" }}>
    <TableRow>
      <TableCell  sx={{fontWeight:"bold",color:"white",fontsize:25}}  align="left">Code</TableCell>
      <TableCell sx={{fontWeight:"bold",color:"white",fontsize:25}} align="left">Title</TableCell>
      <TableCell sx={{fontWeight:"bold",color:"white",fontsize:25}} align="left">Disaster</TableCell>
      <TableCell sx={{fontWeight:"bold",color:"white",fontsize:25}} align="left">Public Law</TableCell>
      
      <TableCell sx={{fontWeight:"bold",color:"white",fontsize:25}} align="left">Urls</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {item?.def_codes?.map((row) => (
      <TableRow hover key={row.code} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align='left'>{row.code || "none"}</TableCell>
        <TableCell align='left'>{row.title || "none"}</TableCell>
        <TableCell align='left'>{row.disaster || "none"}</TableCell>
        <TableCell align='left'>{row.public_law || "none"}</TableCell>
        
        <TableCell align='left' width={100}>{
        row?.urls ?  <Link href={row.urls} underline='none'>{row.urls}</Link> : <Typography>none</Typography>

          }
          </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>

        </Stack>
        ))
        }

         <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="Note archived"
                  
                  
                >
                  
                  <Alert severity="error"  onClose={handleClose} sx={{mt:10}}>{errorMessage}</Alert>
                  </Snackbar>

    </Stack>

  )
}

export default UsaSpendings