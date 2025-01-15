export default function Message({ type, content }) {
    const messageStyles = {
        success: "message-box message-success",
        error: "message-box message-error",
    };

    return content ? (
        <div className={messageStyles[type]}>
            {content}
        </div>
    ) : null;
};