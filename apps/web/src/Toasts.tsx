
type ToastProps = {
    message: string;
    type?: "success" | "error" | "info";
};

function Toasts({ message, type = "info" }: ToastProps) {
    const styles = {
        success: "border-green-200 bg-green-50 text-green-700",
        error: "border-red-200 bg-red-50 text-red-700",
        info: "border-blue-200 bg-blue-50 text-blue-700",
    };

    return (
        <div
            role="status"
            className={`rounded-lg border px-4 py-3 text-sm ${styles[type]}`}
        >
            {message}
        </div>
    );
}

export default Toasts;