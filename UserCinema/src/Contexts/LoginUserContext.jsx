import { createContext, useContext, useState } from 'react';

const LoginUserContext = createContext();
const SetLoginUserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useLoginUserContext() {
    return useContext(LoginUserContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSetLoginUserContext() {
    return useContext(SetLoginUserContext);
}

export function LoginUserProvider({ children }) {
    const [userId, setUserId] = useState(null);

    return (
        <LoginUserContext.Provider value={userId}>
            <SetLoginUserContext.Provider value={setUserId}>
                {children}
            </SetLoginUserContext.Provider>
        </LoginUserContext.Provider>
    );
}