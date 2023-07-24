export default function ImageRender({ image }) {
    if (!image) return <></>;

    const { src, title } = image;
    return (
        <div
            style={{
                height: "45px",
            }}
        >
            <img height={45} src={src} alt={title} />
        </div>
    );
}
