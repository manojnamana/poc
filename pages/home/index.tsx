// ** MUI Imports
import { SearchOutlined } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import { Search } from 'lucide-react'
import { start } from 'repl'

const Admin = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        height: '100vh', // Full viewport height
        textAlign: 'center',
        ml:{md:'31%'},
      }}
    >
     
      <Stack direction='row' spacing={2} sx={{justifyContent:'center',alignItems:'center',
        backgroundColor:'#f5f5f5',borderRadius: '50px',paddingRight:2,width:"350%",border:'2px solid #e0e0e0'}}> 
      <input type="text" placeholder="Search..." 
      style={{width: "100%",height:60,padding:10,border:'none',outline:'none',
      borderStartStartRadius:50,borderEndStartRadius:50,
      fontSize:18,paddingLeft:20}}/>
      <IconButton sx={{":hover":{backgroundColor:'#f5f5f5'}}}>
      <SearchOutlined sx={{ color: 'text.secondary',fontSize:30}} />
      </IconButton>
        
       
        </Stack>

        
        
    </Stack>
  )
}

export default Admin
