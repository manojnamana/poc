
import { SearchOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

import { Stack } from '@mui/system'



const Admin = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        height: '100vh', // Full viewport height
        textAlign: 'center',
        
      }}
    >
       
      <Stack >
        <Box sx={{mx:{md:'70%'},width:'100%'}}>
        <Typography variant="h4" sx={{color:'#0a0a0a',mb:3,justifyContent:'center'}}>Latest Federal Contract Opportunities</Typography>
        </Box>
      
      <Stack direction='row' spacing={2} sx={{justifyContent:'center',alignItems:'center',mx:{md:'11%'},
        backgroundColor:'#f5f5f5',borderRadius: '50px',paddingRight:2,width:"200%",border:'2px solid #e0e0e0'}}> 
      <input type="text" placeholder="Search..." 
      style={{width: "100%",height:60,padding:10,border:'none',outline:'none',
      borderStartStartRadius:50,borderEndStartRadius:50,
      fontSize:18,paddingLeft:20}}/>
      <IconButton sx={{":hover":{backgroundColor:'#f5f5f5'}}}>
      <SearchOutlined sx={{ color: 'text.secondary',fontSize:30}} />
      </IconButton>
        
       
        </Stack>
        
      </Stack>
     

        

        
        
    </Stack>
  )
}

export default Admin
