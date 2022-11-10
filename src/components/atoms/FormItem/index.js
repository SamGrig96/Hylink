import styled, { css } from 'styled-components';
import { Form } from 'antd';

const FormItem = styled(Form.Item)`
  max-width: 100%;
  font-size: 20px;
  line-height: 18px;
  font-weight: 500;
  font-family: Mardoto-Medium;
  padding: 0;
  margin-bottom: 10px;

  .ant-form-item-label {
    margin-bottom: 5px;
    padding: 0 0 3px 0;
    max-height: 30px;
  }

  .ant-form-item-control-input {
    min-height: 20px;
  }

  .ant-form-item-label > label {
    font-weight: 400;
    font-size: 20px;
    color: black;
    margin-bottom: 8px;

    &:before {
      color: black;
    }
  }

  &:focus-within .ant-form-item-label > label {
    color: #f77424;

    &:before {
      color: #f77424;
    }
  }

  ${props =>
    (props.label_mb || props.label_mb === 0) &&
    css`
      .ant-form-item-label > label {
        margin-bottom: ${props.label_mb}px;
      }
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.margin_right &&
    css`
      margin-right: ${props.margin_right};
    `}
  ${props =>
    props.justify &&
    css`
      .ant-form-item-control-input-content {
        display: flex;
        justify-content: ${props.justify};
      }
    `}
  ${props =>
    props.layout === 'vertical' &&
    css`
      div {
        width: 100%;
        text-align: start;
      }
    `}
  ${props =>
    props.labelcolor &&
    css`
      .ant-form-item-label > label {
        color: ${props.labelcolor};
      }
    `}
  ${props =>
    props.labelalign &&
    css`
      .ant-form-item-label {
        text-align: ${props.labelalign};
      }
    `}
  ${props =>
    props.content_just &&
    css`
      .ant-form-item-control-input-content {
        display: flex;
        justify-content: ${props.content_just};
      }
    `}
  ${props =>
    props.labelheight &&
    css`
      .ant-form-item-label {
        height: ${props.labelheight};
      }
    `}
  ${props =>
    props.hide === 'requiredText' &&
    css`
      .ant-form-item-explain {
        display: none;
      }
    `}
  ${props =>
    props.error_padding &&
    css`
      .ant-form-item-explain {
        padding: ${props.error_padding};
      }
    `}
  ${props =>
    props.display_item === 'none' &&
    css`
      .ant-form-item-control-input {
        display: ${props.display_item};
      }
    `}
  ${props =>
    props.show_only === 'validate' &&
    css`
      .ant-form-item-control-input,
      .ant-form-item-label {
        display: none;
      }
    `}
`;

FormItem.defaultProps = {};

/** @component */
export default FormItem;
