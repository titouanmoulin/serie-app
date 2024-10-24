export default function Episode({ ep }) {
    
    return (
        <div className="flex items-center gap-3">
            <img src={ep.image.medium} alt="" className="h-28 rounded-xl"/>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h2>{ep.name}</h2>
                    <h2>{ep.runtime}min</h2>
                </div>
                <p className="text-xs font-light" dangerouslySetInnerHTML={{ __html: ep.summary }} />
            </div>
        </div>
    );
}