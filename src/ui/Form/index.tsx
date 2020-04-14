import React from 'react'
import { jsx, Box, Button, Input, Label } from 'theme-ui'

interface FormRowProps {
  inline?: boolean
}

export const FormRow: React.FC<FormRowProps> = ({ children, inline }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',
      mb: 2,
    }}
  >
    {children}
  </Box>
)

export const FormControl: React.FC = ({ children }) => (
  <Box
    sx={{
      flex: '1 0 auto',
      '& + &': {
        ml: 2,
      },
      ':last-child': {
        mb: 0,
      },
    }}
  >
    {children}
  </Box>
)
