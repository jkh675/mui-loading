import { CircularProgressPropsColorOverrides, SxProps, Theme } from "@mui/material";
import { OverridableStringUnion } from '@mui/types';

export interface StartLoadingOption {
    /// allow user can click out
    manuallyClose?: boolean;
    /// change the color of the progress
    color?: OverridableStringUnion<
        'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
        CircularProgressPropsColorOverrides
    >;
    /// change whether the progress are determinate or not
    variant?: 'determinate' | 'indeterminate'
    /// only works when the variant is determinate
    value?: number;
    /// change whether the progress bar or circle
    linear?: boolean
    /// dicrectly change the props
    progressStyle?: SxProps<Theme>
    /// close event
    onClose?: () => void;
}