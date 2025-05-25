import { useEffect, useState } from 'react'

export function useLocalStorageState<T>(
    key: string,
    defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(defaultValue)
    const [isHydrated, setIsHydrated] = useState(false)

    // Load from localStorage on client
    useEffect(() => {
        if (typeof window === 'undefined') return

        try {
            const stored = localStorage.getItem(key)
            if (stored !== null) {
                setState(JSON.parse(stored))
            }
        } catch {
            // Ignore parse errors
        } finally {
            setIsHydrated(true)
        }
    }, [key])

    // Save to localStorage whenever state changes (after hydration)
    useEffect(() => {
        if (!isHydrated) return
        try {
            localStorage.setItem(key, JSON.stringify(state))
        } catch {
            // Ignore write errors
        }
    }, [key, state, isHydrated])

    return [state, setState]
}
