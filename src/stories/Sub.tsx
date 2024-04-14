import { useLoading } from "../library/hooks";

export default function () {
    const loading = useLoading();

    return (
        <>
            <button
                onClick={() => {
                    loading?.startLoading();
                    setTimeout(() => loading?.stopLoading(), 1000)
                }}
            >
                load circle
            </button>
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
                load circle determinate
            </button>
            <button
                onClick={() => {
                    loading?.startLoading({
                        linear: true,
                    });
                    setTimeout(() => loading?.stopLoading(), 1000)
                }}
            >
                load linear
            </button>
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
        </>
    );
}
