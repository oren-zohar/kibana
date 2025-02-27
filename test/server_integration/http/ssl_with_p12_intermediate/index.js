/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

export default function ({ getService }) {
  const supertest = getService('supertest');

  // FLAKY: https://github.com/elastic/kibana/issues/148515
  describe.skip('kibana server with ssl', () => {
    it('handles requests using ssl with a P12 keystore that uses an intermediate CA', async () => {
      await supertest.get('/').expect(302);
    });
  });
}
