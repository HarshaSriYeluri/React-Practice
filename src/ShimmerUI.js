const ShimmerUI = () => {
    return (
        <div className="shimmer-container">
            {Array(9).fill("").map((e, index) => <div key={'k'+index} className="shimmer-card"></div>)}
        </div>
    )
};

export default ShimmerUI;