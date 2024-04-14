# mui-loading
A simple library for creating the loading ui with mui

## requirement
- [x] [React](https://github.com/facebook/react)
- [x] [MUI](https://mui.com)

## installation
``npm install mui-loading``

## setup
place this to in to your react root
```
...
<LoadingProvider>
    <App /> //<-- replace this with your React component
</LoadingProvider>
...
```

## options 
pass in to startLoading() function
```
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
```

## usage
#### indeterminate cirlce progress
```
const loading = useLoading();
...
<button
    onClick={() => {
        loading?.startLoading();
        setTimeout(() => loading?.stopLoading(), 1000)
    }}
>
    start loading
</button>
...
```
#### determinate cirlce progress
```
const loading = useLoading();
...
<button
    onClick={() => {
        let precentage = 0
        let intervalId = setInterval(() => {
            precentage+= Math.random() * 10;
            loading?.startLoading({
                value: precentage,
                variant: "determinate",
                manuallyClose: true,
                onClose() {
                    clearInterval(intervalId);
                }
            });
            if (precentage >= 100) {
                clearInterval(intervalId);
                loading?.stopLoading()
            }
        }, 100)
    }}
>
    start loading
</button>
...
```
#### indeterminate linear progress
```
const loading = useLoading();
...
<button
    onClick={() => {
        loading?.startLoading({
            linear: true,
        });
        setTimeout(() => loading?.stopLoading(), 1000)
    }}
>
    start loading
</button>
```
#### determinate linear progress
```
const loading = useLoading();
...
<button
    onClick={() => {
        let precentage = 0
        let intervalId = setInterval(() => {
            precentage+= Math.random() * 5;
            loading?.startLoading({
                value: precentage,
                variant: "determinate",
                linear: true,
                manuallyClose: true,
                onClose() {
                    clearInterval(intervalId);
                }
            });
            if (precentage >= 100) {
                clearInterval(intervalId);
                loading?.stopLoading()
            }
        }, 100)
    }}
>
    load linear determinate
</button>
```