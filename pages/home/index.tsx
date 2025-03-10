
import { SearchOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import { useState } from 'react'



const Admin = () => {
  const [query,setQuery] = useState('')
  const router = useRouter()
  return (
    <Stack
      sx={{
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        height: '100vh', // Full viewport height
        textAlign: 'center',
        
      }}
    >  
      <Stack width={'100%'}>
        <Box sx={{width:'100%'}}>
        <Typography variant="h4" sx={{color:'#0a0a0a',mb:3,justifyContent:'center'}}>Latest Federal Contract Opportunities</Typography>
        </Box>
      <Box  width={"90%"} ml={6}> 
      <Stack direction='row' spacing={2} sx={{justifyContent:'center',alignItems:'center',
        backgroundColor:'#f5f5f5',borderRadius: '50px',paddingRight:2,border:'2px solid #e0e0e0'}}> 
      <input type="text"  placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)} 
      style={{width: "100%",height:60,padding:10,border:'none',outline:'none',
      borderStartStartRadius:50,borderEndStartRadius:50,
      fontSize:18,paddingLeft:20}}/>
      <IconButton sx={{":hover":{backgroundColor:'#f5f5f5'}}} disabled={!query} onClick={()=>router.push(`records`)}>
      <SearchOutlined sx={{ color: 'text.secondary',fontSize:30}} />
      </IconButton>
        
       
        </Stack>
        </Box>
      </Stack>   
    </Stack>
  )
}

export default Admin
