const SHARED_STYLES = "h-full w-full opacity-60 blur-2xl";
const DIV_STYLES = "flex h-full w-full overflow-hidden bg-base-100";

const Polygon = ({className, clipPath, bgColor, rotateAngle}: {className: string, clipPath: string, bgColor: string, rotateAngle: number | string}) => (
    <div className={`${className} rotate-${rotateAngle} h-full w-full ${bgColor}`} style={{clipPath}}></div>
);

export function Blur() {
    return (
        <div className={DIV_STYLES} style={{ width: '100%', height: '100%' }}>
            <div className="h-3/6 w-2/5 -translate-x-3/4">
                <Polygon className={SHARED_STYLES} bgColor="bg-purple-600" rotateAngle={30} clipPath="polygon(40% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)" />
            </div>
            <div className="h-2/6 w-1/6 translate-x-1/4">
                <Polygon className={SHARED_STYLES} bgColor="bg-indigo-500" rotateAngle={45} clipPath="polygon(60% 0%, 100% 40%, 70% 100%, 30% 100%, 0% 40%)" />
            </div>
            <div className="h-3/6 w-2/5 translate-y-3/4">
                <Polygon className={SHARED_STYLES} bgColor="bg-deep-purple-400" rotateAngle={12} clipPath="polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%)" />
            </div>
        </div>
    );
}