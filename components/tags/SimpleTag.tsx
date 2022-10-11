type SimpleTagProps = {
    shortTextTag: string;
    colorTag?: string;
};

export function SimpleTag({  shortTextTag, colorTag }: SimpleTagProps) {
    return (
        <span className={`tag ${colorTag?colorTag:'is-black'}`}>{shortTextTag}</span>
    );
}