
import { useEffect ,useState } from 'react';
type ToastProps = {
    message: string;
    type?: "success" | "error" | "info";
};


function Toasts({ message, type = "info" }: ToastProps) {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [message,type]);
    const styles = {
        success: "border-green-200 bg-green-50 text-green-700",
        error: "border-red-200 bg-red-50 text-red-700",
        info: "border-blue-200 bg-blue-50 text-blue-700",
    };
    if (!visible){
        return null;
    }
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