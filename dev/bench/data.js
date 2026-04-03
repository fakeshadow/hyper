window.BENCHMARK_DATA = {
  "lastUpdate": 1775187583004,
  "repoUrl": "https://github.com/fakeshadow/hyper",
  "entries": {
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "0d6c7d5469baa09e2fb127ee3758a79b3271a4f0",
          "message": "v1.9.0",
          "timestamp": "2026-03-31T11:36:23-04:00",
          "tree_id": "7eedbbbf9baf259d1e98a4f18d2abd815e28c9f3",
          "url": "https://github.com/fakeshadow/hyper/commit/0d6c7d5469baa09e2fb127ee3758a79b3271a4f0"
        },
        "date": 1775187471535,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53078,
            "range": "± 9951.90",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "0d6c7d5469baa09e2fb127ee3758a79b3271a4f0",
          "message": "v1.9.0",
          "timestamp": "2026-03-31T11:36:23-04:00",
          "tree_id": "7eedbbbf9baf259d1e98a4f18d2abd815e28c9f3",
          "url": "https://github.com/fakeshadow/hyper/commit/0d6c7d5469baa09e2fb127ee3758a79b3271a4f0"
        },
        "date": 1775187578147,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 68269,
            "range": "± 967.36",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4093804,
            "range": "± 152269.46",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20864,
            "range": "± 305.73",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23427,
            "range": "± 407.34",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 31666,
            "range": "± 694.12",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 98476,
            "range": "± 2018.73",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999924,
            "range": "± 4056.01",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 84445,
            "range": "± 4988.55",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7561826,
            "range": "± 80634.29",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8848391,
            "range": "± 124884.92",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7406946,
            "range": "± 145111.32",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50427603,
            "range": "± 1171021.90",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51004150,
            "range": "± 799430.01",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5110411,
            "range": "± 52979.92",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}