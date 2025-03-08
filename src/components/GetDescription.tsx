import { AutoAwesome, West } from '@mui/icons-material'
import { Stack, Typography, Paper, TextField, Button, Snackbar, Alert,Grid, SnackbarCloseReason } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Linkedin, Save } from 'lucide-react';
import React, { useState } from 'react'
import { updateJob } from '@/pages/api/job';
import { useRouter } from 'next/router';


const validationSchema2 = Yup.object().shape({
    jobDescription: Yup.string().required('Job Description is required'),
    evaluationCriteria: Yup.string().required('Evaluation Criteria is required'),
  });

  interface FormData {

    jobDescription:string
    evaluationCriteria:string
  }



const GetDescription = ({jobDetails}:any) => {
    const [open, setOpen] = useState(false);
    const [openLinkedin,setOpenLinkedin] = useState(false);
        const [loading,setLoading] = useState(false)
        const [message ,setMessage] = useState('')
        const [linkedinMessage,setLinkedinMessage] = useState('')
        const navigation = useRouter()
    console.log(jobDetails)
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpenLinkedin(false)
      };

      const defaultValues ={
        jobDescription: `${jobDetails.job_description}`,
        evaluationCriteria: `${jobDetails.evaluation_criteria}`,
    
      }
        const {
          handleSubmit,
          control,
          formState: { errors },
        } = useForm({
          defaultValues,
          mode:'onBlur',
          
          resolver: yupResolver(validationSchema2),
        });
    const onSave = async(data :FormData) => {
      const {jobDescription, evaluationCriteria} = data
      setLoading(true);
      console.log(data,"save")
  
      try {
      await updateJob({
          job_company_name:jobDetails.job.company_name,
          role:jobDetails.job.role,
          skills:jobDetails.job.skills,
          location:jobDetails.job.location,
          project_experience:jobDetails.job.location,
          job_description: jobDescription,
          evaluation_criteria: evaluationCriteria,
          other_details:jobDetails.job.location,
          linkedin_saved:false,
          decrypted_id:jobDetails.job.decrypted_id,
          
        });
        setOpen(true)
        setMessage('Job Created')
        setTimeout(() => navigation.push("/jobs"), 100);
      }catch (error) {
        setMessage((error as Error).message);
        
        setOpen(true)
        
      } finally {
        setLoading(false);
      }
    };
    
    
    const onLinkedin = async(data:FormData)=>{
      const {jobDescription, evaluationCriteria} = data
      console.log(data,"linkedin")
      setLoading(true);
      try {
     const response =    await updateJob({
            job_company_name:jobDetails.job.company_name,
            role:jobDetails.job.role,
            skills:jobDetails.job.skills,
            location:jobDetails.job.location,
            project_experience:jobDetails.job.location,
            job_description: jobDescription,
            evaluation_criteria: evaluationCriteria,
            other_details:jobDetails.job.location,
            linkedin_saved:true,
            decrypted_id:jobDetails.job.decrypted_id,
            
          });
          setOpenLinkedin(true)
          console.log(response?.message)
          setLinkedinMessage(`${response?.message}`)
          setTimeout(() => navigation.push("/jobs"), 100);
        }catch (error) {
          setLinkedinMessage((error as Error).message);
          
          setOpenLinkedin(true)
          
        } finally {
          setLoading(false);
        }

    }
  return (
    <Stack sx={{ m: { xs: 1, sm: 2, md: 3 ,p:2,}, width: '100%',}}>
      <Stack display={"felx"} flexDirection={"row"}>
              <Button href='/jobs'  sx={{border:1}} >
                <West/>
              </Button>
            </Stack>
    <Typography
      variant="h4"
      color="#8257dc"
      textAlign="center"
      fontFamily="serif"
      fontWeight="bold"
      mb={2}
    >
      {jobDetails.job.company_name}
    </Typography>
    <Paper elevation={3} sx={{p:3}}>
    <form >
      <Grid container spacing={3}>          
        <Grid item xs={12} >
            <Controller
              name="jobDescription"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Job Description"
                  fullWidth
                  multiline
                  rows={9}
                  error={!!errors.jobDescription}
                  helperText={errors.jobDescription?.message}
                />
              )}
            />
        </Grid>
        <Grid item xs={12} >
        <Controller
              name="evaluationCriteria"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Evaluation Criteria"
                  multiline
                  rows={9.8}
                  fullWidth
                  error={!!errors.evaluationCriteria}
                  helperText={errors.evaluationCriteria?.message}
                />
              )}
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Button sx={{gap:2}} fullWidth disabled={loading}  onClick={handleSubmit(onSave)} variant="contained" color="primary">
       <Save/>   Save  Description
        </Button> 
        </Grid>
        <Grid item xs={12} md={6}>
        <Button sx={{gap:2}} fullWidth disabled={loading}  onClick={handleSubmit(onLinkedin)} variant="contained" color="primary">
       <Linkedin/>   Post On Linkedin
        </Button>
       
        </Grid>
      </Grid>

    </form>
    </Paper>
    <Snackbar open={open}  autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={message === "Job Created" ?"success":"error"}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
    <Snackbar open={openLinkedin}  autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={linkedinMessage === "Job updated successfully and posted to LinkedIn"?"success":"error"}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {linkedinMessage}
      </Alert>
    </Snackbar>
  </Stack>
  )
}

export default GetDescription
