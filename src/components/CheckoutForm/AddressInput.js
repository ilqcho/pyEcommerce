import { Grid, TextField } from "@material-ui/core";
import {Controller, useFormContext} from "react-hook-form";

const AddressInput = ({name, label}) => {
    const {control} = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
               control={control}
               name={name}
               render = {({field}) => (
                   <TextField {...field}
                        fullWidth
                        label={label}
                        required
                    />
               )}
            />
        </Grid>
    )
} 

export default AddressInput;
