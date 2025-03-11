
import { Data } from '@/utiles/data'
import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export const Contracts = () => {
  return (
    <Stack gap={2}>
      {Data.map((item) =>
      item.opportunitiesData.map((item, index) =>(
        <Paper elevation={3} key={index} sx={{padding: 2}}>
            <Box display={"flex"} alignItems={"center"} >
              <Typography>
                {item?.title}
              </Typography>

            </Box>
            
        </Paper>)
      )
      )}
    </Stack>
  )
}
