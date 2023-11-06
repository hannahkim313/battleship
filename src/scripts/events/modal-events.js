const emitClickEvents = (e) => {
  if (
    e.target.closest('button') &&
    e.target.closest('button').classList.contains('submit')
  ) {
    location.reload();
  }
};

const events = {
  click: emitClickEvents,
};

const emitModalEvents = (e) => events[e.type](e);

export default emitModalEvents;
