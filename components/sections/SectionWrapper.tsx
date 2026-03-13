/**
 * SectionWrapper:
 * Standardizes vertical spacing and adds a clearly visible divider.
 */
export default function SectionWrapper({
    children,
    showDivider = true
}: {
    children: React.ReactNode,
    showDivider?: boolean
}) {
    return (
        <>
            {showDivider && (
                <div className="w-full flex justify-center py-20">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-foreground/60 to-transparent dark:via-foreground/40" />
                </div>
            )}
            <div className="w-full">
                {children}
            </div>
        </>
    );
}