/* Lightweight local replacements for the Bootstrap Collapse and Modal features used by this site. */
(function () {
  function Collapse(element) { this.element = element; }
  Collapse.prototype.toggle = function () {
    var open = this.element.classList.toggle('show');
    var trigger = document.querySelector('[data-bs-target="#' + this.element.id + '"]');
    if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  function Modal(element) { this.element = element; }
  Modal.prototype.show = function () {
    this.element.classList.add('show');
    this.element.style.display = 'block';
    this.element.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  Modal.prototype.hide = function () {
    this.element.classList.remove('show');
    this.element.style.display = 'none';
    this.element.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('[data-bs-toggle="collapse"]');
    if (toggle) {
      var target = document.querySelector(toggle.getAttribute('data-bs-target'));
      if (target) new Collapse(target).toggle();
    }
    var dismiss = event.target.closest('[data-bs-dismiss="modal"]');
    if (dismiss) {
      var modalElement = event.target.closest('.modal');
      if (modalElement) new Modal(modalElement).hide();
    }
    if (event.target.classList.contains('modal')) new Modal(event.target).hide();
  });
  window.bootstrap = { Modal: Modal, Collapse: Collapse };
})();
