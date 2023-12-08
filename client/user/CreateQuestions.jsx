// CreateQuestions

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { create } from './api-surveys';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '60%',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "lightBlue",
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));


export default function CreateQuestions() {
  const classes = useStyles();

  const [values, setValues] = useState({ 
    question: '',
    answer: '',
  });

  const [open, setOpen] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickSubmit = () => { 
    const user = {
      question: values.question || undefined,
      answer: values.answer || undefined, 
    };

    create(user).then((data) => { 
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setOpen(true);
      }
    });
  };

  CreateQuestions.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Card className={classes.card}> 
        <CardContent>
          <Typography variant="h6" className={classes.title}> 
            Add Quetion and Answer
          </Typography>
                  
          <TextField
            id="question"
            label="Question"
            className={classes.textField}
            value={values.question}
            onChange={handleChange('question')}
            margin="normal"
          />
          <TextField
            id="answer"
            label="Answer"
            className={classes.textField}
            value={values.answer}
            onChange={handleChange('answer')}
            margin="normal"
          />          
        </CardContent> 
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} 
            className={classes.submit}>
            Submit
          </Button>
        </CardActions> 
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New question successfully created. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/surveys">
            <Button color="primary" autoFocus variant="contained" onClick={handleClose}>
            Questionnaires 
            </Button>
          </Link>
        </DialogActions> 
      </Dialog>
    </div>
  );
}

