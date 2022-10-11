type CircleAvatarProps = {
    srcAvatar: string;
    altAvatar: string;
    classNameSizeAvatar?: string;
};

export function CircleAvatar({ srcAvatar, altAvatar, classNameSizeAvatar }: CircleAvatarProps) {
    return (
        <figure className={`image ${!classNameSizeAvatar?'is-48x48':classNameSizeAvatar}`}>
            <img src={srcAvatar} alt={altAvatar} className="is-rounded" />
        </figure>
    );
}