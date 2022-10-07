type CircleAvatarProps = {
    srcAvatar: string;
    altAvatar: string;
};

export function CircleAvatar({ srcAvatar, altAvatar }: CircleAvatarProps) {
    return (
        <figure className="image is-64x64">
            <img src={srcAvatar} alt={altAvatar} className="is-rounded" />
        </figure>
    );
}