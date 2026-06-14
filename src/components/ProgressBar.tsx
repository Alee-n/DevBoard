type ProgressBarProps = {
    progress: number;
};

function ProgressBar({
    progress
}: ProgressBarProps) {

    return (

        <div>

            <div
                className="progress-bar"
            >

                <div
                    className="progress-fill"
                    style={{
                        width: `${progress}%`
                    }}
                />

            </div>

            <p>{progress}%</p>

        </div>

    );
}

export default ProgressBar;