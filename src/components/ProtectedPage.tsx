import PageLayout from "./PageLayout";
import TaskList from "./TaskList";

const ProtectedPage: React.FC = () => {
    return (
        <PageLayout>
            <TaskList />
        </PageLayout>
    )
}
export default ProtectedPage;