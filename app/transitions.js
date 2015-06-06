export default function() {
  var duration = 500;
  /* application */
  this.transition(
    this.fromRoute('application'),
    this.toRoute('index'),
    this.use('explode'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('index'),
    this.use('fade'),
    this.reverse('fade')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('why'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('platform'),
    this.use('toUp'),
    this.reverse('toDown')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('roadmap'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('features'),
    this.use('fade'),
    this.reverse('fade')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('custom-services'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('gallery'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('features'),
    this.use('toDown'),
    this.reverse('toUp')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('next-steps'),
    this.use('toDown'),
    this.reverse('toUp')
  ),
  /* index */

  this.transition(
    this.fromRoute('index'),
    this.toRoute('why'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('index'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('roadmap'),
    this.toRoute('next-steps'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),


  /* Route 1 */

  this.transition(
    this.fromRoute('why'),
    this.toRoute('why.unified-platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('why'),
    this.toRoute('why.cutting-edge-features'),
    this.use('fade'),
    this.reverse('fade')
  ),
  this.transition(
    this.fromRoute('why'),
    this.toRoute('why.efficiency'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  /* Route 2 */
  this.transition(
    this.fromRoute('platform'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  /* Route 3 */
  this.transition(
    this.fromRoute('roadmap'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  /* Route 4 */
  this.transition(
    this.fromRoute('store'),
    this.toRoute('application'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('store'),
    this.toRoute('features'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),
  this.transition(
    this.fromRoute('store'),
    this.toRoute('features'),
    this.use('toLeft'),
    this.reverse('toRight')
  ),

  /* Route 5 */


  this.transition(
    this.fromRoute('features'),
    this.toRoute('custom-services'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  /* Route 6 */


  this.transition(
    this.fromRoute('custom-services'),
    this.toRoute('custom-services.design'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  /* Route 7 */
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute('why'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute('platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('gallery'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  /* Route 8 */
  this.transition(
    this.fromRoute('features'),
    this.toRoute('why'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('features'),
    this.toRoute('platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('features'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('features'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  /* Route 9 */
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('why'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('platform'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('roadmap'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('next-steps'),
    this.toRoute('store'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
