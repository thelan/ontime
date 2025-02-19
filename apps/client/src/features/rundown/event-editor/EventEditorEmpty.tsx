import { memo } from 'react';
import { Kbd } from '@chakra-ui/react';

import { deviceAlt, deviceMod } from '../../../common/utils/deviceUtils';

import style from './EventEditorEmpty.module.scss';

export default memo(EventEditorEmpty);

function EventEditorEmpty() {
  return (
    <div className={style.eventEditor} data-testid='editor-container'>
      <div className={style.prompt}>Select an event to edit</div>
      <div className={style.shortcutSection}>
        <div className={style.prompt}>Shortcut navigation</div>

        <table className={style.shortcuts}>
          <tbody>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>↑</Kbd>
                <AuxKey>/</AuxKey>
                <Kbd>↓</Kbd>
              </td>
              <td>Select entry</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>{deviceMod}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>↑</Kbd>
                <AuxKey>/</AuxKey>
                <Kbd>↑</Kbd>
              </td>
              <td>Reorder selected entry</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>E</Kbd>
              </td>
              <td>Add event below</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>↑</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>E</Kbd>
              </td>
              <td>Add event above</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>B</Kbd>
              </td>
              <td>Add block below</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>↑</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>B</Kbd>
              </td>
              <td>Add block above</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>D</Kbd>
              </td>
              <td>Add delay below</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceAlt}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>↑</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>D</Kbd>
              </td>
              <td>Add delay above</td>
            </tr>
            <tr>
              <td>
                <Kbd>Esc</Kbd>
              </td>
              <td>Deselect entry</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceMod}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>⌫</Kbd>
              </td>
              <td>Delete selected entry</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceMod}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>C</Kbd>
              </td>
              <td>Copy selected entry</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceMod}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>↑</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>V</Kbd>
              </td>
              <td>Paste above</td>
            </tr>
            <tr>
              <td>
                <Kbd>{deviceMod}</Kbd>
                <AuxKey>+</AuxKey>
                <Kbd>V</Kbd>
              </td>
              <td>Paste below</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AuxKey({ children }: { children: React.ReactNode }) {
  return <span className={style.divider}>{children}</span>;
}
