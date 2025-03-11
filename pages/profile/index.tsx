//@ts-nocheck
import React, { useState, useEffect } from "react";
import cookies from "js-cookie";
import {

  TextField,
  Button,
  CircularProgress,
  Alert,
  Stack,
  Grid,
  Snackbar,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import profile from '../../public/images/profile.jpeg'
import { set } from "react-hook-form";
import { Key } from "@mui/icons-material";


const Account = () => {
  
  const [userData, setUserData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[apiKey, setApiKey] = useState(cookies.get("apiKey"));
  const[apiKeyShow, setApiKeyShow] =useState(false)
  const [open,setOpen] = useState(false)
  const [disabled,setDisabled] = useState(true)
 
  // Fetch user details
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const response = await fetch(`/api/users/${authInfo.id}`);
        // if (!response.ok) throw new Error("Failed to fetch user details");

        // const data = await response.json();
        const data = {
          id: "USR001",
          full_name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          address: "123 Main St, City, Country",
        };

        setUserData(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  }


  const handleApiKey = () =>{
    setApiKeyShow(false)
    setDisabled(!disabled)
    if(apiKey !== ""){
      setSuccessMessage("API Key Set Successfully")
      console.log(apiKey)
      cookies.set("apiKey",apiKey);
      setOpen(true)
      // setApiKey("")
    }

  }
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUpdating(true);
    // setSuccessMessage("");
    // setErrorMessage("");
   
   

    // try {
    //   const response = await fetch(`/api/users/${authInfo.id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(userData),
    //   });

    //   if (!response.ok) throw new Error("Failed to update account details");

    //   const updatedData = await response.json();
    //   updateAuthInfo(updatedData); // Update context
    //   setSuccessMessage("Account details updated successfully!");
    // } catch (error) {
    //   // setErrorMessage(error.message);
    //   // setOpen(true)
    // } finally {
    //   setUpdating(false);
    // }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }


  const GetApikey = cookies.get("apiKey")
  const maskedApikey = GetApikey?.length
    ? `${GetApikey.slice(0, 2)}${"*".repeat(GetApikey.length - 8)}${GetApikey.slice(-2)}`
    : "";

  return (
    <Paper elevation={3} sx={{mt:4,mx:4,p:3,borderRadius:6}}>
    <Grid container  spacing={3}>
      <Grid item  xs={12} md={4} >
        <Stack  sx={{display:'flex',justifyContent:"center",flexDirection:"row",alignItems:"center"}}>

          <Stack sx={{mt:6}} display={"flex"}  alignItems={"center"} justifyContent={"center"}>
          <img src={profile.src} alt="profile" width={200} height={200} style={{borderRadius:100}} />

          <Button variant="contained" color="error" sx={{mt:4,mb:10}}>Delete User</Button>
          </Stack>
          
        </Stack>

      </Grid>
      <Grid item xs={12}md={8}>
      <Stack  sx={{p:3}}>

          

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Grid container spacing={2}>
              <Grid item xs={12} >
            <TextField
              label="Full Name"
              name="full_name"
              value={userData.full_name}
              onChange={handleChange}
              fullWidth
              required
            />
            </Grid>
            <Grid item xs={12} >
            <TextField
              label="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              disabled
            />
            </Grid>
            <Grid item xs={12} >
            <TextField
              label="Phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              fullWidth
            />
            </Grid>
            <Grid item xs={12} >
            <TextField
              label="Address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              multiline
              rows={2}
              fullWidth
            />
            
</Grid>

            </Grid>
            <Stack mt={2} flexDirection={"row"} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"} >
      <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={updating}
              
            >
              {updating ? "Updating..." : "Save Changes"}
            </Button>
            </Stack>
          </form>

      </Stack>
      
      <Stack  sx={{p:3}}>
            <TextField
              label="Enter API Key"
              name="Enter_API_Key"
              value={apiKeyShow ? apiKey : maskedApikey

              }  
              onChange={(e)=>setApiKey(e.target.value)}
              disabled={disabled}
              required
              disable slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={()=>setApiKeyShow(!apiKeyShow)}>
                        <Key/>
                      </IconButton>
                      
                    </InputAdornment>
                  ),
                },
              }}
            
            />
            <Stack mt={2} flexDirection={"row"} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"} >
           {disabled ? <Button variant="contained" color="primary" onClick={()=>(setDisabled(false),setApiKeyShow(true))} sx={{mt:2}}>Edit API Key</Button>
           : <Button variant="contained" color="primary" onClick={handleApiKey} sx={{mt:2}}>Save API Key</Button>}
            </Stack>
            </Stack>
      </Grid>


    </Grid>

          
          <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          
        >
          <Alert severity="success"   onClose={handleClose}   sx={{mt:10}}>{successMessage}</Alert>
          </Snackbar>
          
          
          {/* <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          
          
        >
          
          <Alert severity="error"  onClose={handleClose} sx={{mt:10}}>{errorMessage}</Alert>
          </Snackbar> */}
    </Paper>
  );
};

export default Account;
