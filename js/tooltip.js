export function getTooltip() {
  tippy('#tooltipBtn', {
    content: 'При наличии свободных мест',
    arrow: false,
    placement: 'top',
    theme: 'white',
    animation: 'scale',
    delay: [0, 300],
  });
}