import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = ({formId, fields, buttons }) => (
  <form action="#" className="Form" id={formId}>
    {fields.map(field => {
      return (
        <Fragment key={field.id}>
          {field.multiline ? (
            <TextField
              multiline
              rowsMax={field.rowsMax}
              rows={field.rows}
              id={field.id}
              className={field.className}
              label={field.label}
              placeholder={field.placeholder}
              margin={field.margin}
            />
          ) : (
            <TextField
              id={field.id}
              className={field.className}
              label={field.label}
              placeholder={field.placeholder}
              margin={field.margin}
            />
          )}
          <br />
        </Fragment>
      );
    })}

    {buttons.map(button => {
      return (
        <Button
          key={button.name}
          variant={button.variant}
          size={button.size}
          color={button.color}
          className={button.className}
        >
          {button.name}
        </Button>
      );
    })}
  </form>
);

export default Form;
