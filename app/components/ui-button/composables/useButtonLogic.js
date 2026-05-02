import { computed } from "vue";
import {
  BUTTON_BASE_INTERACTIVE,
  DISABLED_CLASS,
  VARIANT_CLASS_MAP,
} from "../styles";

export const useButtonLogic = props => {
  const resolvedVariant = computed(() => props.variant);

  const isLink = computed(() => Boolean(props.link) && !props.disabled);

  const componentAttrs = computed(() => {
    if (isLink.value) {
      return {
        to: props.link,
        target: "_blank",
      };
    }

    return {
      type: props.type,
      disabled: props.disabled,
    };
  });

  const buttonClass = computed(() => {
    if (props.disabled) return DISABLED_CLASS;
    return `${BUTTON_BASE_INTERACTIVE} ${VARIANT_CLASS_MAP[resolvedVariant.value]}`;
  });

  return {
    isLink,
    componentAttrs,
    buttonClass,
  };
};
