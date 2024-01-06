'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        // params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)

    return (
        <div style={{ display: 'flex', flex: '1 1 0%', flexShrink: 0 }}>
            <label htmlFor="search" style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                margin: "-1px",
                padding: 0,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                border: 0
            }}>
                Search
            </label>
            <input
                style={{
                    display: 'block',
                    width: '100%',
                    borderRadius: '0.375rem',
                    border: '1px solid #e5e7eb', // Border color gray-200
                    padding: '1.125rem 1rem', // py-[9px] pl-10
                    fontSize: '0.875rem', // text-sm
                    outline: '2px solid transparent', // outline-2
                    '&::placeholder': {
                        color: '#a3a3a3', // placeholder:text-gray-500
                    }
                }}
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    );
}
