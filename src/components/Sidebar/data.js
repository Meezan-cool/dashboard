import { RxDashboard } from 'react-icons/rx';
// import { BsBusFrontFill } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
// import { MdArrowForwardIos } from 'react-icons/bi';
import { BiLibrary } from 'react-icons/bi';
import { LiaWalletSolid } from 'react-icons/lia';
import { PiNotePencilBold } from 'react-icons/pi';
import { TfiBlackboard } from 'react-icons/tfi';
import { LuClipboardCheck } from 'react-icons/lu';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { MdOutlineAddHomeWork } from 'react-icons/md';
import { LiaBuilding } from 'react-icons/lia';
import { MdManageAccounts } from 'react-icons/md';
import { MdReportGmailerrorred } from 'react-icons/md';
import { MdOutlineEditNotifications } from 'react-icons/md';
import { BiBus } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';
export const SideItem = [
    {
        id: 1,
        name: 'Dashboard',
        icons: <RxDashboard />,

    },
    {
        id: 2,
        name: 'Widget',
        icons: <PiNotePencilBold />,
    },
    {
        id: 3,
        name: 'Components',
        icons: <TfiBlackboard />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Class",
            },
            {
                name: "Class Routine",
            },
            {
                name: "Virtual Classroom",
            },
            {
                name: "Subjects",
            },
        ],
    },
    {
        id: 4,
        name: 'Element',
        icons: <CiUser />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Student",
            },
            {
                name: "Teacher",
            },
            {
                name: "Support Staff",
            },
            {
                name: "Parent",
            },
        ],
    },
    {
        id: 5,
        name: 'Advanced Elements',
        icons: <LiaClipboardListSolid />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Exam",
            },
            {
                name: "Exam Hall",
            },
            {
                name: "Grade",
            },
            {
                name: "Manage Marks",
            },
            {
                name: "Migration",
            },
        ],
    },
    {
        id: 6,
        name: 'Chart',
        form: "/homework/form",
        icons: <MdOutlineAddHomeWork />,
    },
    {
        id: 7,
        name: 'Tables',
        icons: <LuClipboardCheck />,
    },
    {
        id: 8,
        name: 'Pages',
        icons: <LiaWalletSolid />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Fees Payment",
            },
        ],
    },
    {
        id: 9,
        name: 'Custom',
        icons: <BiLibrary />,
    },
    {
        id: 10,
        name: 'Submenus',
        icons: <LiaBuilding />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Level-1",
            },
            {
                name: "Level-2",
                arrow: <MdArrowForwardIos />,
                subitems: [
                    {
                        name:"Level-2.1"
                    },
                    {
                        name:"Level-2.2"
                    },
                    {
                        name:"Level-2.3",
                        arrow: <MdArrowForwardIos />,
                        subitems:[
                            {
                                name:"Level-2.3.1"
                            },
                            {
                                name:"Level-2.3.2"
                            },
                            {
                                name:"Level-2.3.3"
                            },
                        ],
                    },
                    {
                        name:"Level-2.4"
                    },
                    {
                        name:"Level-2.5"
                    },
                ],
            },
        ],
    },
    {
        id: 11,
        name: 'Forms',
        icons: <BiBus />
    },

    {
        id: 12,
        name: 'Icons',
        icons: <MdReportGmailerrorred />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Student Information",
            },
            {
                name: "Finance/Payment",
            },
            {
                name: "Attendance",
            },
            {
                name: "Examinations",
            },
            {
                name: "Library",
            },
            {
                name: "Hostel",
            },
            {
                name: "User Log",
            },
            {
                name: "Audit Trail Report",
            },
        ],
    },
    {
        id: 13,
        name: 'Notification',
        icons: <MdOutlineEditNotifications />,
        arrow: <MdArrowForwardIos />,
        subitems: [
            {
                name: "Notice",
            },
            {
                name: "Event",
            },
            {
                name: "Message",
            },
            {
                name: "Notification",
            },
        ],
    },
    {
        id: 14,
        name: 'Account',
        icons: <MdManageAccounts />,
    },
]