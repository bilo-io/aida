import { ToggleOption } from "@/components/ui/Toggle";
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";

export type ViewType = 'smallGrid' | 'largeGrid' | 'list';
export const viewOptions: ToggleOption<ViewType>[] = [
    { value: 'smallGrid', icon: <BsFillGrid3X3GapFill className="w-4 h-4" /> },
    { value: 'largeGrid', icon: <BsFillGridFill className="w-4 h-4" /> },
    { value: 'list', icon: <FiList className="w-4 h-4" /> },
];