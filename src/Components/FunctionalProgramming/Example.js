import { useConfirm } from './useConfirm/useConfirm';
import { usePreventLeave } from './usePreventLeave/usePreventLeave';

const Example = () => {

// useConfirm
const deleteWorld = () => console.log("Deleting the world");
const abort = () => console.log("Aborted");
const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

// usePageLeave
const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
    <div>
    {/* useConfirm */}
      <section>
        <h4>useConfirm</h4>
        <button onClick={confirmDelete}>Delete the world</button>
      </section>

    {/* usePageLeave */}
      <section>
        <h4>usePreventLeave</h4>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </section>
    </div>
    );

}

export default Example;
